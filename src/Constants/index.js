import { Platform } from "react-native";

/**
 * This regular expression matches email addresses that follow the standard format of "username@domain.com". 
 * It allows usernames to contain any character except <>()\.,;:\s@", 
 * and it allows domain names to contain alphabets, digits, and hyphens, separated by a period, 
 * and ending with two or more alphabets.
 */
export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
 * These represents the several general style constants in the applications 
 * such as padding of container, size & weight of font, etc
 */
export const CONTAINER_PADDING = Platform.OS === 'ios' ? 20 : 15;
export const FONT_SIZE = 16;
export const FONT_BOLD_WEIGHT = '600';
export const BORDER_RADIUS = 10;

/**
 * These values represents general event listners names to be used across the application
 */
export const unAuthorizedUser = 'UNAUTHORIZED_USER'
