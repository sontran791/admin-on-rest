import React from 'react';
import {List, Datagrid, TextField, ReferenceField,
        Edit, Create, EditButton, DisabledInput, LongTextInput,
        ReferenceInput, SelectInput, TextInput,
        Filter}
        from 'admin-on-rest/lib/mui';

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = (props) => (
    <Edit title={PostTitle} {...props}>
        <DisabledInput source="id" />
        <ReferenceInput label="User" source="userId" reference="users">
            <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="title" />
        <LongTextInput source="body" />
    </Edit>
);

export const PostCreate = (props) => (
    <Create {...props}>
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="title" />
        <LongTextInput source="body" />
    </Create>
);

const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name"/>
    </ReferenceInput>
  </Filter>
);

export const PostList = (props) => (
  <List {...props} filter={PostFilter}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField label="User" source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="title" />
      <TextField source="body" />
      <EditButton />
    </Datagrid>
  </List>
);
