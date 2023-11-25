import React, { ReactElement, HTMLProps } from 'react';

import classes from './MyComponentTest.module.scss';

export interface MyComponentTestProps extends HTMLProps<HTMLDivElement> {
  
}

export default (props: MyComponentTestProps): ReactElement<HTMLDivElement> => {
  return (
    <div className={classes.Root}></div>
  );
}