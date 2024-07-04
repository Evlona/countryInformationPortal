class ErrorResponse extends Error {
    constructor(
        public message: string,
        public statusCode: number,
    ) {
        super(message);
    }
}

export { ErrorResponse };