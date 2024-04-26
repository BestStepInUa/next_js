// export async function GET(request) {
//   return new Response('Here is data');
// }

export const GET = async request => {
  const data = {
    name: 'Bob',
    age: 10,
    bio: 'Some info',
  };
  return new Response(JSON.stringify(data));
};

export const POST = async request => {
  return new Response(request.body);
};

export const DELETE = async request => {
  return new Response(request.body);
};
