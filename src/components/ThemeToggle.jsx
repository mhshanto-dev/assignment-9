"use client";

import { Button } from "@heroui/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      isIconOnly
      variant="light"
      radius="full"
      onPress={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
    >
      {theme === "dark" ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} />
      )}
    </Button>
  );
};

export default ThemeToggle;