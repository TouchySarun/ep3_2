"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import Container from "../components/Container";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

function WelcomePage() {
  const { data: session } = useSession();
  if (!session) redirect("/login");
  return (
    <Container>
      <Navbar session={session} />
      <div className="flex-grow">
        <div className="container mx-auto shadow-xl my-10 p-10 rounded-xl">
          <div className="flex justify-between">
            <div>
              <h3 className="text-3xl">Profile</h3>
              <p>Welcome, {session?.user.name}</p>
              <p>Email, {session?.user.email}</p>
            </div>
            <div>
              <Link
                className="bg-green-500 border py-2 px-3 rounded-md text-lg my-2"
                href="/create"
              >
                Create Post
              </Link>
            </div>
          </div>
          <div>
            <div className="shadow-xl my-10 p-10 rounded-xl flex">
              <Image
                className="my-3 rounded-md"
                src="https://plus.unsplash.com/premium_photo-1663853489900-3f24ea776dea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
                width={300}
                height={0}
                alt="chakiew"
              />
              <div className="m-3">
                <h4 className="text-2xl">Post Title</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur est sit quo repellendus debitis ducimus amet?
                  Eligendi aut, minus incidunt quibusdam autem, nihil quis omnis
                  alias pariatur quae fuga blanditiis.
                </p>
                <div className="mt-5">
                  <Link
                    className="bg-gray-500 text-white border py-2 px-3 rounded-md text-lg my-2"
                    href="/edit"
                  >
                    Edit
                  </Link>
                  <Link
                    className="bg-red-500 text-white border py-2 px-3 rounded-md text-lg my-2"
                    href="/delete"
                  >
                    Delete
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default WelcomePage;
