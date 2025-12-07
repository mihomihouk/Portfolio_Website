const baseURL = `${process.env.NEXT_PUBLIC_SERVER_URL}/api`

export const config = {
    logPageView:`${baseURL}/log`,
    getVisitorAnalytics: `${baseURL}/visitor-analytics`
}