import React, { useContext } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActionArea,
  CardActions,
  Divider,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from 'react-loading-skeleton';
import { AppContext } from '../context/app.context';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 140,
    width: '100%',
  },
  actions: {
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
}));

const ShowProduct = ({ productData }) => {
  const { image, product, prices } = productData;
  const { state } = useContext(AppContext);
  const { loading } = state;
  const classes = useStyles();
  return (
    <Card className='m-2 w-1/3 lg:w-1/5 flex flex-col justify-between'>
      {loading ? (
        <Skeleton height={160} duration={0.7} />
      ) : (
        <CardMedia image={image} title={product} className={classes.media} />
      )}
      <CardContent>
        {loading ? <Skeleton /> : <h5>{product}</h5>}
        <Divider />
        {loading ? (
          <Skeleton />
        ) : (
          <p>
            ${prices[0]} - ${prices[prices.length - 1]}{' '}
          </p>
        )}

        <CardActionArea className={classes.actions}>
          <CardActions>
            <Link to={`/product/${product}`}>
              <Button size='small' color='primary'>
                Buy Now
              </Button>
            </Link>
          </CardActions>
        </CardActionArea>
      </CardContent>
    </Card>
  );
};

export default ShowProduct;
