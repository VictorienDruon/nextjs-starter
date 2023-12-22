import NextLink from "next/link";
import { styled } from "@styled-system/jsx";
import { link } from "./recipe";

export type LinkProps = typeof Link;
export const Link = styled(NextLink, link);
