import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BASE_PATH = "/EARLY-CHILDHOOD-CTR-KENYA";

export const EASE = [0.16, 1, 0.3, 1] as const;
export const EASE_BLUR = [0.2, 0.9, 0.3, 1] as const;

export const ASSETS = {
  logo:    "https://raw.githubusercontent.com/Kirans0615/EARLY-CHILDHOOD-CTR-KENYA/main/ddc4f3_2ed7b7c54bc8498098ba4ddbcccdd24e~mv2.avif",
  hero:    "https://raw.githubusercontent.com/Kirans0615/EARLY-CHILDHOOD-CTR-KENYA/main/0e3f49_d911cb407c0c4cefb01018a7dc3df823~mv2.avif",
  donate:  "https://raw.githubusercontent.com/Kirans0615/EARLY-CHILDHOOD-CTR-KENYA/main/DONATE%20(2).avif",
  mission1:"https://raw.githubusercontent.com/Kirans0615/EARLY-CHILDHOOD-CTR-KENYA/main/IMG_8867.avif",
  mission2:"https://raw.githubusercontent.com/Kirans0615/EARLY-CHILDHOOD-CTR-KENYA/main/IMG_8900.avif",
  kenya:   "https://raw.githubusercontent.com/Kirans0615/EARLY-CHILDHOOD-CTR-KENYA/main/ddc4f3_2ed7b7c54bc8498098ba4ddbcccdd24e~mv2.avif",
} as const;

export const ZEFFY_URL =
  "https://www.zeffy.com/en-US/donation-form/eta-prime-wing-early-childhood-development-center-kenya";

export const NAV_LINKS = [
  { href: "/",                       label: "Home" },
  { href: "/about/",                 label: "About" },
  { href: "/projects/",              label: "Projects" },
  { href: "/early-childhood-kenya/", label: "Kenya" },
  { href: "/student-mission-trips/", label: "Missions" },
] as const;

export const SCRIPTURE = {
  acts18:
    "You will receive power when the Holy Spirit comes upon you. And you will be my witnesses … to the ends of the earth.",
  acts18Ref: "Acts 1:8",
  john317:
    "Whoever has this world’s goods, and sees his brother in need, and shuts up his heart from him, how does the love of God abide in him?",
  john317Ref: "1 John 3:17",
};
