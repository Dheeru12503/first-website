import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    message: string
}

export function GET(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const nav = [
        "home",
        "sdfghj",
        "fghji",
        "ghjkl;"
    ];
    return Response.json(nav);
}