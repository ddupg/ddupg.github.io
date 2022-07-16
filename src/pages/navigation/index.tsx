import React, { useState } from 'react';
import Layout from '@theme/Layout';
import classifies from "@site/src/components/Navigation/data";
import { Website, Classify } from '@site/src/components/Navigation/interface';
import { Paper, Card, CardContent, CardActions, Typography, Box, Button, Alert } from '@mui/material';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

import copy from 'copy-to-clipboard';

export default function Navigation() {
  return (
    <Layout title="导航">
      <NavigationPage classifies={classifies} />
    </Layout>
  );
}

const NavigationPage: React.FC<{classifies: Classify[]}> = ({classifies}) => {
  return <Paper elevation={0} sx={{ paddingTop: 3 }}>
    {
      classifies.map((classify) => {
        return <div>
          <SubTitle title={classify.name} />
          <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', p: 1, m: 1 }}>
            {
              classify.websites.map((website) => {
                return <WebsiteCard website={website} />
              })
            }
          </Box>
        </div>
      })
    }
  </Paper>
}

const SubTitle: React.FC<{title: string}> = ({title}) => {
  return <Typography variant="h5" sx={{p: 2, paddingLeft: 4 }}>
      {title}
    </Typography>
}

const WebsiteCard: React.FC<{website: Website}> = ({website}) => {
  const { name, intro, url, icon } = website;

  console.log(website)
  const [showCopy, setShowCopy] = useState(false)
  const onCopy = () => {
    copy(website.url)
    setShowCopy(true)
  };

  return (
    <Box sx={{ p: 1, m: 1, }}>
      <Card
        variant='outlined'
        sx={{ width: 300, height: 120 }}
      >
        <CardContent sx={{ paddingBottom: 0 }}>
          <Typography variant="h6" component="div">
            {website.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap={true} paragraph={true} >
            {website.intro}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: 'flex-end', paddingTop: 0, paddingBottom: 0 }}>
          <Button size="small" color="primary" onClick={onCopy}>
            Copy
          </Button>
          <Button size="small" color="primary" onClick={() => window.open(url)}>
            GO
          </Button>
        </CardActions>
      </Card>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={showCopy}
        autoHideDuration={1500}
        onClose={() => setShowCopy(false)}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          复制成功
        </Alert>
      </Snackbar>
    </Box>
  );
};