import { useEffect, useState } from 'react'
import RenderContent from './RenderContent';

const GetContent = ({ url }) => {
  const [content, setContent] = useState({});


  useEffect(() => {
    (async () => {
      const data = await fetch(url).then(
        (response) => response.json()
      );
      setContent(data)
    })();
  }, [url])

  return (
    <RenderContent key={content.date} content={content} />
  )
}

export default GetContent