import React from "react";
import FilterDatePicker from "../../../../components/Filter/FilterDatePicker";
import FilterDropdown from "../../../../components/Filter/FilterDropdown";
import FilterInput from "../../../../components/Filter/Input";
import Table from "../../../../components/Form/Table";
import Wrapper from "../../../../layout/Wrapper";

const MngUserPage = () => {
  const contents = [
    {
      id: 1,
      name: "PMG_총괄",
      userId: "admin",
      userGroupName: "관리자",
      company: "",
      createDate: "2022-04-26 23:19:50",
      updateDate: "2022-04-26 23:19:50",
      editor: "admin",
    },
    {
      id: 2,
      name: "PMG_총괄",
      userId: "admin",
      userGroupName: "관리자",
      company: "선진버스",
      createDate: "2022-04-26 23:19:50",
      updateDate: "2022-04-26 23:19:50",
      editor: "admin",
    },
    {
      id: 3,
      name: "PMG_총괄",
      userId: "admin",
      userGroupName: "관리자",
      company: "선진버스(태리)",
      createDate: "2022-04-26 23:19:50",
      updateDate: "2022-04-26 23:19:50",
      editor: "admin",
    },
    {
      id: 4,
      name: "PMG_총괄",
      userId: "admin",
      userGroupName: "관리자",
      company: "",
      createDate: "2022-04-26 23:19:50",
      updateDate: "2022-04-26 23:19:50",
      editor: "admin",
    },
    {
      id: 5,
      name: "PMG_총괄",
      userId: "admin",
      userGroupName: "관리자",
      company: "선진버스",
      createDate: "2022-04-26 23:19:50",
      updateDate: "2022-04-26 23:19:50",
      editor: "admin",
    },
    {
      id: 6,
      name: "PMG_총괄",
      userId: "admin",
      userGroupName: "관리자",
      company: "선진버스(태리)",
      createDate: "2022-04-26 23:19:50",
      updateDate: "2022-04-26 23:19:50",
      editor: "admin",
    },
    {
      id: 7,
      name: "PMG_총괄",
      userId: "admin",
      userGroupName: "관리자",
      company: "",
      createDate: "2022-04-26 23:19:50",
      updateDate: "2022-04-26 23:19:50",
      editor: "admin",
    },
    {
      id: 8,
      name: "PMG_총괄",
      userId: "admin",
      userGroupName: "관리자",
      company: "선진버스",
      createDate: "2022-04-26 23:19:50",
      updateDate: "2022-04-26 23:19:50",
      editor: "admin",
    },
    {
      id: 9,
      name: "PMG_총괄",
      userId: "admin",
      userGroupName: "관리자",
      company: "선진버스(태리)",
      createDate: "2022-04-26 23:19:50",
      updateDate: "2022-04-26 23:19:50",
      editor: "admin",
    },
    {
      id: 10,
      name: "PMG_총괄",
      userId: "admin",
      userGroupName: "관리자",
      company: "",
      createDate: "2022-04-26 23:19:50",
      updateDate: "2022-04-26 23:19:50",
      editor: "admin",
    },
    {
      id: 11,
      name: "PMG_총괄",
      userId: "admin",
      userGroupName: "관리자",
      company: "선진버스",
      createDate: "2022-04-26 23:19:50",
      updateDate: "2022-04-26 23:19:50",
      editor: "admin",
    },
    {
      id: 12,
      name: "PMG_총괄",
      userId: "admin",
      userGroupName: "관리자",
      company: "선진버스(태리)",
      createDate: "2022-04-26 23:19:50",
      updateDate: "2022-04-26 23:19:50",
      editor: "admin",
    },
    {
      id: 13,
      name: "PMG_총괄",
      userId: "admin",
      userGroupName: "관리자",
      company: "선진버스(태리)",
      createDate: "2022-04-26 23:19:50",
      updateDate: "2022-04-26 23:19:50",
      editor: "admin",
    },
    {
      id: 14,
      name: "PMG_총괄",
      userId: "admin",
      userGroupName: "관리자",
      company: "선진버스(태리)",
      createDate: "2022-04-26 23:19:50",
      updateDate: "2022-04-26 23:19:50",
      editor: "admin",
    },
    {
      id: 15,
      name: "PMG_총괄",
      userId: "admin",
      userGroupName: "관리자",
      company: "선진버스(태리)",
      createDate: "2022-04-26 23:19:50",
      updateDate: "2022-04-26 23:19:50",
      editor: "admin",
    },
    {
      id: 16,
      name: "PMG_총괄",
      userId: "admin",
      userGroupName: "관리자",
      company: "선진버스(태리)",
      createDate: "2022-04-26 23:19:50",
      updateDate: "2022-04-26 23:19:50",
      editor: "admin",
    },
    {
      id: 17,
      name: "PMG_총괄",
      userId: "admin",
      userGroupName: "관리자",
      company: "선진버스(태리)",
      createDate: "2022-04-26 23:19:50",
      updateDate: "2022-04-26 23:19:50",
      editor: "admin",
    },
    {
      id: 18,
      name: "PMG_총괄",
      userId: "admin",
      userGroupName: "관리자",
      company: "선진버스(태리)",
      createDate: "2022-04-26 23:19:50",
      updateDate: "2022-04-26 23:19:50",
      editor: "admin",
    },
  ];

  return (
    <>
      <Wrapper title="사용자 관리">
        <FilterInput title="사용자명" />
        <FilterDropdown
          title="충전소"
          list={[
            { id: "", title: "전체" },
            { id: "1", title: "선진(김포구래)" },
            { id: "2", title: "김포(대포리)" },
            { id: "3", title: "김포(태리)" },
            { id: "4", title: "파주(검산동)" },
            { id: "5", title: "김포(학운리)" },
            { id: "6", title: "SDI" },
            { id: "7", title: "성남(석운동)" },
            { id: "8", title: "화성(진안동)" },
            { id: "9", title: "고양(대자동)" },
            { id: "10", title: "산본여객충전소" },
            { id: "11", title: "영남통운" },
          ]}
        />
        <FilterDatePicker title="조회일자" />
      </Wrapper>
      <Table
        header={["NO", "사용자명", "사용자ID", "사용자그룹명", "업체명", "등록일시", "수정일시", "수정자"]}
      >
        {contents.map(({ id, name, userId, userGroupName, company, createDate, updateDate, editor }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{userId}</td>
            <td>{userGroupName}</td>
            <td>{company}</td>
            <td>{createDate}</td>
            <td>{updateDate}</td>
            <td>{editor}</td>
          </tr>
        ))}
      </Table>
    </>
  );
};

export default MngUserPage;
