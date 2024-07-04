import React from "react";
import AdminNav from "../components/AdminNav";
import Footer from "../components/Footer";
import SideNav from "../components/SideNav";
import Container from "../components/Container";
import Link from "next/link";
import Image from "next/image";

function AdminPostPage() {
  return (
    <Container>
      <AdminNav />
      <div className="flex-grow">
        <div className="container mx-auto">
          <div className="flex mt-10">
            <SideNav />
            <div className="p-10">
              <h3 className="text-3xl mb-3">Manage Posts</h3>
              <p>A list of posts</p>
              <div className="shadow-lg overflow-x-auto">
                <table className="text-left rounded-md mt-3 table-fixed w-full">
                  <thead>
                    <tr className="bg-gray-400">
                      <th className="p-5">Post ID</th>
                      <th className="p-5">Post Title</th>
                      <th className="p-5">Post Image</th>
                      <th className="p-5">Post Content</th>
                      <th className="p-5">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-5">asd8a0sd67</td>
                      <td className="p-5">How to make chakiew</td>
                      <td className="p-5">chakiew is very aroiy</td>
                      <td className="p-5">
                        <Image
                          alt="a chakiew"
                          width={80}
                          height={80}
                          src="https://plus.unsplash.com/premium_photo-1663853489900-3f24ea776dea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
                          className="my-3 rounded-md"
                        />
                      </td>
                      <td className="p-5">
                        <Link
                          className="bg-gray-500 text-white border py-2 px-3 rounded text-lg my-2"
                          href="/admin/posts/edit"
                        >
                          Edit
                        </Link>
                        <Link
                          className="bg-red-500 text-white border py-2 px-3 rounded text-lg my-2"
                          href="/admin/posts/delete"
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default AdminPostPage;
