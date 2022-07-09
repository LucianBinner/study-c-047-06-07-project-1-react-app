import { useEffect, useRef, useState } from 'react';
import { mapData } from '../../api/map-data';
import { Base } from '../Base';
import mock from '../Base/mock';
import { Container } from './styles';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

const Home = () => {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch(
          'http://localhost:1337/api/pages?populate[menu][populate]=*&populate[sections][populate]=*',
        );
        const json = await data.json();
        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);
        setData(() => pageData[0]);
      } catch (error) {
        setData(() => undefined);
      }
    };

    if (isMounted.current === true) {
      load();
    }

    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  return (
    <Container>
      <Base {...mock} />
    </Container>
  );
};

export default Home;
