import chalk from "chalk";


export default class Chroma {
    info(message: string, end: string = "\n") {
        /**
        * Prints an informational message in blue color.
        * @param message - The message to print.
        * @param end - The string to append at the end of the message.
        */
        process.stdout.write(chalk.blue(message) + end);
    };


    warn(message: string, end: string = "\n") {
        /**
        * Prints a warning message in yellow color.
        * @param message - The message to print.
        * @param end - The string to append at the end of the message.
        */
        process.stdout.write(chalk.yellow(message) + end);
    };


    error(message: string, end: string = "\n") {
        /**
        * Prints an error message in red color.
        * @param message - The message to print.
        * @param end - The string to append at the end of the message.
        */
        process.stdout.write(chalk.red(message) + end);
    };


    success(message: string, end: string = "\n") {
        /**
        * Prints a success message in green color.
        * @param message - The message to print.
        * @param end - The string to append at the end of the message.
        */
        process.stdout.write(chalk.green(message) + end);
    };


    secondary(message: string, end: string = "\n") {
        /**
        * Prints a secondary message in gray color.
        * @param message - The message to print.
        * @param end - The string to append at the end of the message.
        */
        process.stdout.write(chalk.gray(message) + end);
    };


    boldWhite(message: string, end: string = "\n") {
        /**
        * Prints a message in bold white color.
        * @param message - The message to print.
        * @param end - The string to append at the end of the message.
        */
        process.stdout.write(chalk.bold.hex("#ffffff")(message) + end);
    };
};

// Creating a global instance for convenience
export const chroma = new Chroma();
