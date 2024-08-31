"use client"
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {AlignJustify, Moon, Sun}  from "lucide-react"
import { FolderKanban, Home, SquareLibrary, SquareTerminal, User ,GraduationCap,FileQuestion, PhoneCall, Rss} from "lucide-react"
import { useTheme } from "next-themes";


const NavigationBarItem = [
    {
      title: 'Home',
      href: '/',
      icon: (<Home className="h-full w-full text-neutral-500 dark:text-neutral-300" />)
    },
    {
      title: "Education",
      href: "/education",
      icon: (<GraduationCap className="h-full w-full text-neutral-500 dark:text-neutral-300" />)
    },
    {
      title: 'Project',
      href: '/project',
      icon: (<FolderKanban className="h-full w-full text-neutral-500 dark:text-neutral-300" />)
    },
    {
      title: 'Skill',
      href: '/skill',
      icon: (<SquareLibrary className="h-full w-full text-neutral-500 dark:text-neutral-300" />)
    },
    {
      title: 'Guest Book',
      href: '/guestbook',
      icon: (<FileQuestion className="h-full w-full text-neutral-500 dark:text-neutral-300" />)
    },
    {
      title: 'Blog',
      href: '/blog',
      icon: (<Rss className="h-full w-full text-neutral-500 dark:text-neutral-300" />)
    },
    {
      title: 'About',
      href: '/about',
      icon: (<User className="h-full w-full text-neutral-500 dark:text-neutral-300" />)
    },
    {
      title: 'Contact',
      href: '/contact-us',
      icon: (<PhoneCall className="h-full w-full text-neutral-500 dark:text-neutral-300" />)
    },
    {
      title: 'Terminal',
      href: '/terminal',
      icon: (<SquareTerminal className="h-full w-full text-neutral-500 dark:text-neutral-300" />)
    }
];

export const FloatingDock = ({
  desktopClassName,
  mobileClassName,
}: {
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <div className="fixed bottom-5 left-0 right-0 flex items-center justify-center h-[3rem] w-full z-50 pointer-events-auto">
      <FloatingDockDesktop items={NavigationBarItem} className={desktopClassName} />
      <FloatingDockMobile items={NavigationBarItem} className={mobileClassName} />
    </div>
  );
};

const FloatingDockMobile = ({
    items,
    className,
  }: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    className?: string;
  }) => {
    const [open, setOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
      <div className={cn("fixed left-2 bottom-0 md:hidden", className)}>
        <AnimatePresence>
          {open && (
            <motion.div
              layoutId="nav"
              className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2"
            >
              {items.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    transition: {
                      delay: idx * 0.05,
                    },
                  }}
                  transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                >
                  <Link
                    href={item.href}
                    key={item.title}
                    className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center"
                  >
                    <div className="h-4 w-4" onClick={()=>setOpen(false)}>{item.icon}</div>
                  </Link>
                </motion.div>
              ))}
              {mounted && (
                <button
                  className="h-10 z-50 w-10 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center"
                  onClick={() => {setTheme(theme === "dark" ? "light" : "dark"),setOpen(false)}}
                >
                  {theme === "dark" ? <Sun className=" h-4 w-4"/> : <Moon className="h-4 w-4" />}
                </button>
                )}
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={() => setOpen(!open)}
          className="h-10 w-10 rounded-full bg-gray-900 dark:bg-neutral-900 flex items-center justify-center opacity-90"
        >
          <AlignJustify className="h-5 w-5 text-white dark:text-gray-300 opacity-100" />
        </button>
      </div>
    );
};
  

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);

  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);


  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex h-16 gap-4 items-end  rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 pb-3",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}

    {mounted && (
      <motion.div
        style={{ width, height }}
        className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <motion.div
            className="flex items-center justify-center"
          >
          {theme === "dark" ? <Sun className="h-full w-full text-neutral-500 dark:text-neutral-300"/> : <Moon className="h-full w-full text-neutral-500 dark:text-neutral-300" />}
          </motion.div>
      </motion.div>
      )}
      
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Link href={href}>
        <motion.div
          ref={ref}
          style={{ width, height }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative"
        >
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, y: 10, x: "-50%" }}
                animate={{ opacity: 1, y: 0, x: "-50%" }}
                exit={{ opacity: 0, y: 2, x: "-50%" }}
                className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
              >
                {title}
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div
            style={{ width: widthIcon, height: heightIcon }}
            className="flex items-center justify-center"
          >
            {icon}
          </motion.div>
        </motion.div>
      </Link>
    </>
  );
}