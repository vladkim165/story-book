import tw, { styled } from 'twin.macro';
import { Autocomplete, TextField } from '@mui/material';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { options } from '../mockData';

const GroupHeader = tw.div`font-bold bg-zinc-200 py-2 px-4 text-gray-400 text-sm`;
const GroupItems = tw.ul`p-0 text-sm`;
const GrouItem = styled.div(({ hasBorder }: { hasBorder: boolean }) => [
  tw`p-0`,
  hasBorder && tw`absolute left-1.5 bottom-0 border-2 border-solid border-red-700 h-full`,
]);
const NoScrollbarListbox = tw.div`overflow-hidden`;

const AutoCompleteStory = (): JSX.Element => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      groupBy={(option) => option.group}
      getOptionLabel={(option) => option.payload}
      ListboxComponent={NoScrollbarListbox}
      popupIcon={null}
      clearIcon={null}
      renderInput={(params) => <TextField {...params} />}
      renderGroup={(params) => (
        <li key={params.key} tw="p-0">
          <GroupHeader>{params.group}</GroupHeader>
          <GroupItems>
            {Array.isArray(params.children) &&
              params?.children?.map((child, index) => (
                <li key={child.key} tw="p-0 flex relative">
                  <GrouItem {...{ hasBorder: index === 0 }}> </GrouItem>
                  {child}
                </li>
              ))}
          </GroupItems>
        </li>
      )}
      renderOption={(props, option, { inputValue }) => {
        const titleMatches = match(option.payload, inputValue, { insideWords: true });
        const titleParts = parse(option.payload, titleMatches);

        const tags = option?.tags?.join('') || '';

        const tagMatches = match(tags, inputValue, { insideWords: true });
        const tagParts = parse(tags, tagMatches);

        return (
          <li {...props} tw="flex flex-col !items-start">
            <div>
              {titleParts.map((part, index) => (
                <span
                  key={index}
                  style={{
                    fontWeight: part.highlight ? 700 : 400,
                  }}
                >
                  {part.text}
                </span>
              ))}
            </div>
            {tags && (
              <div>
                {tagParts.map((part, index) => (
                  <span
                    key={index}
                    style={{
                      fontWeight: part.highlight ? 700 : 400,
                    }}
                    tw="text-xs"
                  >
                    {part.text}
                  </span>
                ))}
              </div>
            )}
          </li>
        );
      }}
      sx={{
        width: '80vw',
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
          outline: 'none',
          borderColor: '#9ecaed',
          boxShadow: '0 0 10px #9ecaed',
        },
      }}
    />
  );
};

export default AutoCompleteStory;
