const ROOT_URL = "http://localhost:7000";

export const getApis = {
    createUser: () => `${ROOT_URL}/sign-up`,
    signIn: () => `${ROOT_URL}/sign-in`,
    userDetails: (userId) => `${ROOT_URL}/user/${userId}`,
    createQuotation: () => `${ROOT_URL}/create-quotation`,
    allQuotations: () => `${ROOT_URL}/quotations`,
}