import React, { useState } from 'react';
import styled from 'styled-components';
import Select from '@/components/common/Select';
import Input from '@/components/common/Input';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Container = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
`;

const SelectWrapper = styled.div`
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

const EditorContainer = styled.div`
  height: 300px;
`;

const SelectOptions = [
  { value: 'group', label: '그룹을 선택해주세요' },
  { value: 'eyes', label: '눈 / 피부 / 귀' },
  { value: 'eyes', label: '눈 / 코 / 귀' },
];

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['link', 'image'],
  ],
};

const formats = [
  'bold', 'italic', 'underline', 'link', 'image'
];

const PostCreate: React.FC = () => {
  const [editorContent, setEditorContent] = useState('');

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
  };

  return (
    <Container>
      <SelectWrapper>
        <Select
          selectStyle="square"
          selectSize="bg"
          options={SelectOptions}
        />
      </SelectWrapper>
      <InputWrapper>
        <Input
          inputSize='bg'
          placeholder="제목을 입력해주세요."
          inputPadding='sm'
        />
      </InputWrapper>
      <EditorContainer>
        <ReactQuill
          placeholder='내용을 작성해주세요.'
          style={{ height: '300px' }}
          value={editorContent}
          onChange={handleEditorChange}
          modules={modules}
          formats={formats}
        />
      </EditorContainer>
    </Container>
  );
};

export default PostCreate;
