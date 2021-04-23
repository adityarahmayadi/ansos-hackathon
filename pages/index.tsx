import Dashboard from '../components/pages/dashboard'

const Page = ({ data }: any) => (
  <Dashboard data={data} />
)


export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://200f66adafe8.ngrok.io/list')
  const data = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data,
    },
  }
}

export default Page