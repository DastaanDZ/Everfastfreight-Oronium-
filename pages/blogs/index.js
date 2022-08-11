import axios from 'axios';
import AllNB from '../../component/templates/AllNB';
import { API_URL } from '../../utils/urls';

const index = ({blogs}) => {
  return (
    <>
      <AllNB news={blogs} title='Blogs' type='blogs'/>
    </>
  )
}

export default index

export async function getServerSideProps() {

  const blogsRes = await axios.get(`${API_URL}/api/blogs?populate=*`);
  console.log(blogsRes);
  return {
      props: {
        blogs: blogsRes.data,
      },
  }
}