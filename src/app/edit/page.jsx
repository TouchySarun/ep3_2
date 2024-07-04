import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Container from "../components/Container";

function EditPage() {
  return (
    <Container>
      <Navbar />
      <div className="flex-grow">
        <div className="container mx-auto shadow-xl my-10 p-10 rounded-xl">
          <Link
            href="/welcome"
            className="bg-gray-500 inline-block text-white border py-2 px-3 my-2 rounded"
          >
            Go Back
          </Link>
          <hr className="my-3" />
          <h3 className="text-xl">Edit Post</h3>
          <form action="">
            <input
              type="text"
              className="w-[300px] block bg-gray-100 border py-2 px-3 rounded text-lg my-2"
              placeholder="Post title"
            />
            <input
              type="text"
              className="w-[300px] block bg-gray-100 border py-2 px-3 rounded text-lg my-2"
              placeholder="Post img"
            />
            <textarea
              className="w-[300px] block bg-gray-100 border py-2 px-3 rounded text-lg my-2"
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Enter your post content"
            ></textarea>
            <button
              className="bg-green-500 text-white border py-2 px-3 rounded text-lg my-2"
              type="submit"
              name="edit"
            >
              Update Post
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default EditPage;
