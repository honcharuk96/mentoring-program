import React from 'react';
import {useRouter} from 'next/router';

const NotFound = () => {
    const router = useRouter()
  return (
    <div>
      <h3>
        No match for <code>{router.asPath}</code>
      </h3>
    </div>
  );
};

export default NotFound;
