import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

const addUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const json = JSON.parse(req.body)
  console.log(json);
  
  const email = json.email
  const user = await prisma.user.create({
    data: {
      email
    }
  });
  res.status(200).json(user);
};

export default addUser;