import tw, { styled } from 'twin.macro';
import { Autocomplete, TextField } from '@mui/material';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { options, OptionType } from '../mockData';

const GroupHeader = tw.div`font-bold bg-zinc-200 py-2 px-4 text-gray-400 text-sm`;
const GroupItems = tw.ul`p-0 text-sm`;
const GroupItem = styled.div(({ hasBorder }: { hasBorder: boolean }) => [
  tw`p-0`,
  hasBorder && tw`absolute left-1.5 bottom-0 border-2 border-solid border-red-700 h-5/6`,
]);
const NoScrollbarListbox = tw.ul`!overflow-hidden`;
const StyledAutocomplete = styled(Autocomplete)`
  &:focus-within {
    .MuiOutlinedInput-root {
      outline: none;
      border-color: #9ecaed;
      box-shadow: 0px 0px 5px rgb(14 165 233);
    }
  }
  .MuiOutlinedInput-root {
    padding: 12px !important;
  }
  ${tw`sm:w-128 w-80`}
`;
const HighlightedText = styled.span(({ highlighted, small }: { highlighted?: boolean; small?: boolean }) => [
  small && tw`text-xs`,
  highlighted && tw`font-bold`,
]);

const AutoCompleteStory = (): JSX.Element => {
  return (
    <StyledAutocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      groupBy={(option: OptionType) => option.group}
      getOptionLabel={(option: OptionType) => option.title}
      ListboxComponent={NoScrollbarListbox}
      popupIcon={null}
      clearIcon={null}
      renderInput={(params) => <TextField {...params} fullWidth />}
      renderGroup={(params) => (
        <div key={params.key} tw="p-0">
          <GroupHeader>{params.group}</GroupHeader>
          <GroupItems>
            {Array.isArray(params.children) &&
              params?.children?.map((child, index) => (
                <div key={child.key} tw="p-0 flex relative">
                  <GroupItem hasBorder={index === 0}> </GroupItem>
                  {child}
                </div>
              ))}
          </GroupItems>
        </div>
      )}
      renderOption={(props, option: OptionType, { inputValue }) => {
        const titleMatches = match(option.title, inputValue, { insideWords: true });
        const titleParts = parse(option.title, titleMatches);

        const tags = option.tags?.join('') || '';

        const tagMatches = match(tags, inputValue, { insideWords: true });
        const tagParts = parse(tags, tagMatches);

        return (
          <li {...props} tw="flex flex-col !items-start">
            <div>
              {titleParts.map((part, index) => (
                <HighlightedText key={index} highlighted={part.highlight}>
                  {part.text}
                </HighlightedText>
              ))}
            </div>
            {tags && (
              <div>
                {tagParts.map((part, index) => (
                  <HighlightedText key={index} highlighted={part.highlight} small>
                    {part.text}
                  </HighlightedText>
                ))}
              </div>
            )}
          </li>
        );
      }}
    />
  );
};

export default AutoCompleteStory;
