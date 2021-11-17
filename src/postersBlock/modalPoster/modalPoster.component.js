import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { statusForm } from '../../global/constants/global.constants';

const PosterForm = lazy(() => import('../posterForm/posterForm.connector'));

const ModalPoster = modalForm =>
  modalForm[statusForm.ADD] || modalForm[statusForm.UPDATE] || modalForm[statusForm.DELETE]
    ? ReactDOM.createPortal(
        <Suspense fallback={<div>Loading...</div>}>
          <PosterForm modalForm={modalForm} />
        </Suspense>,
        document.body,
      )
    : null;
export default ModalPoster;
