# TODA App Backend

# business

# User Story

- Người dùng có thể tạo nhiều TODO item
- Người dùng có thể mark done 1 hoặc nhiều TODO item
- Người dùng có thể xem toàn bộ TODO (đã hoàn thành và chưa hoàn thành)
- Người dùng có thể filter những TODO đã hoàn thành
- Người dùng có thể filter những TODO chưa hoàn thành
- Người dùng có thể xóa các TODO
- Người dùng có thể xóa toàn bộ TODO đã hoàn thành
- Người dùng có thể sửa nội dung todo


# Analyse

# Build APIs (RESTful APi)

- Create Todo - Create single todo for eachtime (`/api/createTodo`)
- Update Todo & mark this  todo as complete (`/api/updateTodo`)
- Get all todo (`/api/todos`)
- Get all completed todos (`/api/todos` params:`completed: true`)
- Get all activated todos (`/api/todos` params:`completed: false`)
- Delete todo (`/api/deleteTodo`)
- Delete all completed todos (`/api/clearCompleted`)