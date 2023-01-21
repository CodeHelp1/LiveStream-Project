import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import cursor from '../../../assets/images/cursor.png';
import { deleteCourse } from '../../../redux/actions/admin';
import { getAllCourses, getCourseLectures } from '../../../redux/actions/course';
import Sidebar from '../Sidebar';
import CourseModal from './CourseModal';
import toast from "react-hot-toast";

const AdminCourses = () => {
  const {courses, lectures} = useSelector(state => state.course);

  const {loading, error, message} = useSelector(state => state.admin);

  const dispatch = useDispatch();

  const {isOpen , onClose , onOpen} = useDisclosure();

  const courseDetailsHandler = courseId => {
    dispatch(getCourseLectures(courseId));
    onOpen();
  };
    const deleteButtonHandler = courseId => {
      console.log(courseId);
      dispatch(deleteCourse(courseId));
    };
    const deleteLectureButtonHandler = (courseId , lectureId) => {
      console.log(courseId);
      console.log(lectureId);
    }

    const addLectureHandler = (e, courseId , title , description , video) => {
      e.preventDefault();
    };
    useEffect(() => {
      if (error) {
        toast.error(error);
        dispatch({ type: 'clearError' });
      }
      if (message) {
        toast.success(message);
        dispatch({ type: 'clearMessage' });
      }
    dispatch(getAllCourses());
    }, [dispatch, error, message])

  return (
    <Grid
      css={{
        cursor: `url(${cursor}), default`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box p={['0', '8']} overflowX="auto">
        <Heading children="All Users" my="16" textAlign={['center', 'left']} />

        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size="lg">
            <TableCaption>All available courses in the Database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>

            <Tbody>
              {courses.map(item => (
                <Row courseDetailsHandler={courseDetailsHandler}
                deleteButtonHandler={deleteButtonHandler}
                key={item._id}
                item={item} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>

    <CourseModal
    isOpen={isOpen} onClose={onClose} 
    id = {"ewiuoiwtuwoitwoit"}
    courseTitle = "React Course"
    deleteButtonHandler = {deleteLectureButtonHandler}
    addLectureHandler = {addLectureHandler}
    lectures = {lectures}
    Loading = {loading}
    />
      </Box>
      <Sidebar />
    </Grid>
  );
}

function Row({ item, courseDetailsHandler , deleteButtonHandler, loading }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url}  />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.Views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>
      
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
          onClick={() => courseDetailsHandler(item._id)}
          variant={'outline'} color="purple.500"
          isLoading = {loading}
          >
            View Lectures
          </Button>
          <Button
          onClick={() => deleteButtonHandler(item._id)}
          color={'purple.600'}
          isLoading = {loading}
          >
          <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}

export default AdminCourses;
