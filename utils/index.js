export const ConsoleLog = (msg, isError = false) => {
    if (!msg)
        return;
    if (isError) {
        console.error(msg);
    }
    else {
        console.log(msg);
    }
};
//# sourceMappingURL=index.js.map