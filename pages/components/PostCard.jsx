import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({ post }) => {
  console.log(post)
  return (
    <div className="mb-8 rounded-lg bg-white p-0 pb-12 shadow-lg lg:p-8">
      <div className="relative mb-6 overflow-hidden pb-80 shadow-md">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="absolute h-80 w-full object-cover object-top shadow-lg"
        />
      </div>
      <h1 className="mb-8 cursor-pointer text-center text-3xl font-semibold transition duration-700 hover:text-pink-600">
        <Link href={`/post/${post.slug}`}>
          <a>{post.title}</a>
        </Link>
      </h1>
      <div className="mb-8 block w-full items-center justify-center text-center lg:flex">
        <div className="mb-4 mr-8 flex w-full items-center justify-center lg:mb-0 lg:w-auto">
          <img
            src={post.author.photo.url}
            alt={post.author.name}
            className="rounded-full align-middle"
            width="30px"
            height="30px"
          />
          <p className="ml-2 inline align-middle text-lg text-gray-700">
            {post.author.name}
          </p>
          <div className="text font-medium">
            <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          </div>
        </div>
        <p className="mb-8 px-4 text-center text-lg font-normal text-gray-700 lg:px-20">
          {post.excerpt}
        </p>
        <div className="text-center">
          <Link href={`/post/${post.slug}`}>
            <span className="inline-block transform cursor-pointer rounded-full bg-pink-600 px-7 py-3 text-lg font-medium text-white transition duration-500 hover:-translate-y-1">
              Continue Reading
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PostCard
