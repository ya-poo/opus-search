import {ComposerTable} from "../component/ComposerTable";
import {useCallback, useEffect, useState, VFC} from "react";
import {AppBar, Box, Button, CircularProgress, Container, Toolbar} from "@mui/material";
import {ComposerResponse} from "../api/ComposerResponse";
import {apiClient} from "../api/lib/apiClient";
import {Composer} from "../api/common";
import {Period, Periods} from "../domain/Period";

export const ComposersPage: VFC = () => {
  const [composers, setComposers] = useState<Array<Composer>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPeriod, setPeriod] = useState<Period>('Romantic');

  const fetchComposers = useCallback(async () => {
    setIsLoading(true);

    await apiClient
      .get<ComposerResponse>(`/composer/list/epoch/${selectedPeriod}.json`)
      .then((response) => {
        setComposers(response.data.composers.sort((c1, c2) => {
          if (c1.birth < c2.birth) {
            return -1;
          } else {
            return 1;
          }
        }));
      })

    setIsLoading(false);
  }, [selectedPeriod]);

  useEffect(() => {
    fetchComposers()
      .catch(console.error)
  }, [fetchComposers]);

  return (
    <>
      <AppBar position="static" enableColorOnDark>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
              {Periods.map((period) => (
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{my: 2, color: 'white'}}
                  onClick={() => setPeriod(period)}
                >
                  {period}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {
        isLoading ? (<CircularProgress/>) : <ComposerTable composers={composers}/>
      }
    </>
  )
}
