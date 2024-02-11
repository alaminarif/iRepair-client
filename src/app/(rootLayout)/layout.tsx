import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Providers from "@/lib/Providers";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

const WithRootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await getServerSession(authOptions);
  // console.log(session);
  return (
    <Providers>
      <Navbar session={session ? true : false} />
      {children}
      <Footer />
    </Providers>
  );
};

export default WithRootLayout;
