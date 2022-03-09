import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Repository from './repositories/RepositoryFactory';
import liquidParser from './liquid/liquidParser';
import ExampleComponent from './components/ExampleComponent/component.jsx';

import './App.scss';

const ApiRepository = Repository.get('api');

interface Entry {
  fields: {image: object; title: string; description: string}
  meta: {name: string; slug: string}
}

function App():JSX.Element {
  const [posts, setPosts] = useState<Entry[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const year = new Date().getFullYear();
  const siteName = liquidParser.parse('{{site.name}}');
  const getPosts = async () => {
    setLoading(true);
    try {
      const response = await ApiRepository.getEntriesByType('capacitacion-modyo', 'post');
      const postsResponse = response.data.entries?.map((entry:Entry) => ({
        description: entry.fields.description,
        title: entry.fields.title,
        image: entry?.fields.image,
      }));
      setPosts(postsResponse);
      return postsResponse;
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="test-app">
      <div className="bg-white py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8 text-center">
              <div className="row">
                { loading
                  ? (<h1>cargando</h1>)
                  : posts.map((post: Entry, index: number) => (
                    <ExampleComponent key={index} post={post} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        <div
          id="footer"
          className="py-5 mt-4"
          role="contentinfo"
        >
          <div className="container">
            <div className="mt-2 pt-2 border-top d-flex">
              <span>
                { siteName }
                {' '}
                &copy;
                { year }
              </span>

              <span className="ml-auto">
                Made with
                <FontAwesomeIcon
                  icon="heart"
                  color="red"
                  className="mx-2"
                />
                in
                {' '}
                <a href="https://www.modyo.com">Modyo CLI</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
