import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ProductsCard = ({ image, title, price }) => {
  return (
    <article className="w-full md:w-[352px] bg-white flex flex-col">
      <Card style={{ height: '100%' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
            className="h-[240px]"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              #{price}/day
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </article>
  );
};

export default ProductsCard;
