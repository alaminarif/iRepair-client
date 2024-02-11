export const getAllServices = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/services`, {
    next: {
      revalidate: 5,
    },
  });
  return res.json();
};
