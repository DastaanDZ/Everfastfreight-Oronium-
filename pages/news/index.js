import axios from 'axios';
import AllNB from '../../component/templates/AllNB';
import { API_URL } from '../../utils/urls';

const index = ({news}) => {
    console.log(news)
  return (
    <>
      <AllNB news={news}/>
    </>
  )
}

export default index

export async function getStaticProps() {

  const newsRes = await axios.get(`${API_URL}/api/news?populate=*`);

  return {
      props: {
        news: newsRes.data,
      },
  }
}