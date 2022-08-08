import { FC, useState } from 'react';
import { Paper, Typography, Card, CardMedia, CardContent } from '@mui/material';

import { Photo } from '@types';

import { sliceString } from '@functions';

/**
 * ! Images URLs from jsonPlaceholder don`t load
 * ! correctly, so I added mock image to display it.
 */
import { mockImage } from '@assets/images';

import styles from './photo-item.module.scss';

type PhotoItemProps = {
    data: Photo;
    onClick: () => void;
}
const PhotoItem: FC<PhotoItemProps> = ({ data, onClick }) => {
    const [elevation, setElevation] = useState(3);

    const onMouseOver = () => setElevation(6);
    const onMouseOut = () => setElevation(3);

    return (
        <Paper
            sx={{ height: '100%', cursor: 'pointer' }}
            elevation={elevation}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            onClick={onClick}
        >
            <Card data-testid="photo-item" sx={{
                boxShadow: 'none'
            }}>
                <CardMedia
                    component="img"
                    // image={data.url}
                    // src={data.url}
                    image={mockImage}
                    src={mockImage}
                    height={200}
                    alt={sliceString(data.title, 10)}
                />

                <CardContent>
                    <Typography variant="body2" classes={styles.photo_item__title}>
                        {data.title}
                    </Typography>
                </CardContent>
            </Card>


        </Paper>
    );
}

export { PhotoItem };