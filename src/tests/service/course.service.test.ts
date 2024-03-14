import { createCourse } from "../../service/course.service";

import * as repository from "../../repository/course.repository";

describe("createCourse", () => {
  test("createCourse success", async () => {
    const mock = jest.spyOn(repository, "createCourseDB");
    mock.mockResolvedValue([{ id: 1, course: "json", description: "test" }]);
    const result = await createCourse("json", "test");
    expect(result).toEqual([{ id: 1, course: "json", description: "test" }]);
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith("json", "test");
    expect(result[0].id).toBe(1);
  });

  test("createCourse failed", async () => {
    const mock = jest.spyOn(repository, "createCourseDB");
    mock.mockResolvedValue([]);
    try {
      await createCourse("json", "test");
    } catch (error: any) {
      expect(mock).toHaveBeenCalled();
      expect(error.message).toBe("The database does not created");
    }
  });
});
