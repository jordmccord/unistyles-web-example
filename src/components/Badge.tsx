import React, { forwardRef } from "react";
import { StyleSheet } from "react-native-unistyles";
import { View, ViewProps } from "react-native";

interface BadgeProps extends ViewProps {
  colorScheme?: "cyan" | "green" | "red" | "gold" | "grey";
  size?: "small" | "large";
  strong?: boolean;
  borderless?: boolean;
}

const Badge = forwardRef<View, BadgeProps>(({ children, ...props }, ref) => {
  const {
    colorScheme = "cyan",
    size = "large",
    strong = false,
    borderless = false,
    style,
    ...rest
  } = props;

  styles.useVariants({ colorScheme, strong, size, borderless });

  return (
    <View ref={ref} {...rest} style={[styles.container, style]}>
      {children}
    </View>
  );
});

Badge.displayName = "Badge";

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: theme.space[2],
    borderRadius: theme.radii.sm,
    paddingVertical: theme.space[1],
    alignSelf: "flex-start",
    gap: theme.space[1],
    variants: {
      colorScheme: {
        cyan: {
          backgroundColor: theme.isDark
            ? theme.colors.cyan700
            : theme.colors.cyan200,
        },
        red: {
          backgroundColor: theme.isDark
            ? theme.colors.red700
            : theme.colors.red200,
        },
        green: {
          backgroundColor: theme.isDark
            ? theme.colors.green700
            : theme.colors.green200,
        },
        gold: {
          backgroundColor: theme.isDark
            ? theme.colors.gold700
            : theme.colors.gold200,
        },
        grey: {
          backgroundColor: theme.isDark
            ? theme.colors.grey700
            : theme.colors.grey200,
        },
      },
      borderless: {
        true: {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        },
        false: {},
      },
      strong: {
        true: {},
        false: {},
      },
      size: {
        small: {
          paddingVertical: theme.space[0.5],
        },
        large: {
          paddingVertical: theme.space[1],
        },
      },
    },
  },
}));

export default Badge;
