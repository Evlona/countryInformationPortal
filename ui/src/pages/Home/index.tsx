import { Box, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

function renderRow(props: ListChildComponentProps) {
    const { index, style } = props;

    return (
        <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemButton>
                <ListItemText primary={`Item ${index + 1}`} />
            </ListItemButton>
        </ListItem>
    );
}

function HomePage() {
    return (
        <Box
            sx={{
                width: '100%',
                height: 400,
                maxWidth: 360,
                bgcolor: 'background.paper',
            }}
        >
            <FixedSizeList
                height={window.innerWidth}
                width={360}
                itemSize={46}
                itemCount={200}
                overscanCount={5}
            >
                {renderRow}
            </FixedSizeList>
        </Box>
    );
}

export default HomePage;
