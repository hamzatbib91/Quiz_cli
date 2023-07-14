
export const generateRandomString = (lenth=7) => {
    const char = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890';
    const random = Array.from(
        {length: lenth},
        () => char[Math.floor(Math.random() * char.length)]
    );
    const randomString = random.join("");
    return randomString;
}