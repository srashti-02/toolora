export interface TempMailbox {
  id: string;
  address: string;
  token: string;
}

export interface TempMessage {
  id: string;

  from: {
    address: string;
    name: string;
  };

  subject: string;

  intro: string;

  seen: boolean;

  createdAt: string;
}

export interface TempMessageDetails {
  id: string;

  from: {
    address: string;
    name: string;
  };

  subject: string;

  html: string[];

  text: string;

  createdAt: string;
}