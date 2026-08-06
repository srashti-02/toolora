import {
  TempMailbox,
  TempMessage,
  TempMessageDetails,
} from "../types";

const BASE_URL = "https://api.mail.tm";

function randomString(length = 10) {
  const chars =
    "abcdefghijklmnopqrstuvwxyz0123456789";

  let value = "";

  for (let i = 0; i < length; i++) {
    value += chars.charAt(
      Math.floor(Math.random() * chars.length)
    );
  }

  return value;
}

export async function getDomain(): Promise<string> {
  const response = await fetch(
    `${BASE_URL}/domains`
  );

  if (!response.ok) {
    throw new Error(
      "Unable to fetch domains."
    );
  }

  const data = await response.json();

  return data["hydra:member"][0].domain;
}

export async function createMailbox(): Promise<TempMailbox> {

  const domain = await getDomain();

  const username = randomString();

  const address = `${username}@${domain}`;

  const password = randomString(16);

  const createResponse = await fetch(
    `${BASE_URL}/accounts`,
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify({
        address,
        password,
      }),
    }
  );

  if (!createResponse.ok) {
    throw new Error(
      "Unable to create mailbox."
    );
  }

  const account =
    await createResponse.json();

  const tokenResponse = await fetch(
    `${BASE_URL}/token`,
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify({
        address,
        password,
      }),
    }
  );

  if (!tokenResponse.ok) {
    throw new Error(
      "Unable to login."
    );
  }

  const tokenData =
    await tokenResponse.json();

  return {
    id: account.id,

    address,

    token: tokenData.token,
  };
}

export async function getInbox(
  token: string
): Promise<TempMessage[]> {

  const response = await fetch(
    `${BASE_URL}/messages`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      "Unable to fetch inbox."
    );
  }

  const data =
    await response.json();

  return data["hydra:member"];
}

export async function getMessage(
  id: string,
  token: string
): Promise<TempMessageDetails> {

  const response = await fetch(
    `${BASE_URL}/messages/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      "Unable to fetch email."
    );
  }

  return response.json();
}