import {useState, VFC} from "react";
import MaterialTable from "@material-table/core";
import {Composer, Work} from "../api/common";
import {Button, ButtonGroup, FormControlLabel, FormGroup, Switch} from "@mui/material";
import {Genre, Genres} from "../domain/Genre";

interface ComposerWorkTableProps {
  composer: Composer
  works: Work[]
}

export const ComposerWorkTable: VFC<ComposerWorkTableProps> = (props) => {
  const [selectedGenre, setSelectGenre] = useState<Genre | 'All'>('All');
  const [showPopularWorks, setShowPopularWorks] = useState(false);
  const [showRecommendedWorks, setShowRecommendedWorks] = useState(false);

  const onGenreButtonClick = (genre: Genre | 'All') => {
    setSelectGenre(genre)
  }

  const shouldShow = (work: Work): boolean => {
    const okGenre = selectedGenre === 'All' || work.genre === selectedGenre
    const popular = !showPopularWorks || work.popular === '1'
    const recommended = !showRecommendedWorks || work.recommended === '1'

    return okGenre && popular && recommended
  }

  return (
    <>
      <ButtonGroup aria-label="genre filter">
        {['All'].concat(Genres).map((genre) => (
          <Button
            variant={genre === selectedGenre ? 'contained' : 'outlined'}
            onClick={() => onGenreButtonClick(genre)}
          >{genre}</Button>
        ))}
      </ButtonGroup>
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch/>
          }
          label='Popular Works'
          onChange={(_, check) => {
            setShowPopularWorks(check)
          }}
        />
        <FormControlLabel
          control={
            <Switch/>
          }
          label='Recommended Works'
          onChange={(_, check) => {
            setShowRecommendedWorks(check)
          }}
        />
      </FormGroup>
      <MaterialTable
        title={`Works of ${props.composer.name}`}
        columns={[
          {title: 'Title', field: 'title'},
          {title: 'Subtitle', field: 'subtitle'},
          {title: 'Genre', field: 'genre'},
        ]}
        data={props.works.filter((work) => {
          return shouldShow(work);
        }).map((work) => {
          return {
            title: work.title,
            popular: work.popular,
            recommended: work.recommended,
            genre: work.genre,
            subtitle: work.subtitle
          }
        })}
        options={{
          search: true,
          paging: false
        }}
      />
    </>
  )
}
