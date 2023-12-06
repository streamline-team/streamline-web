import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import unittest
from selenium.webdriver.common.action_chains import ActionChains
import os
import os


def make_orderer():
    order = {}

    def ordered(f):
        order[f.__name__] = len(order)
        return f

    def compare(a, b):
        return [1, -1][order[a] < order[b]]

    return ordered, compare

ordered, compare = make_orderer()
unittest.defaultTestLoader.sortTestMethodsUsing = compare


current_directory = os.path.dirname(os.path.abspath(__file__))

new_folder_path = os.path.join(current_directory, "test_images")
os.makedirs(new_folder_path)


def clear_folder(folder_path):
    for filename in os.listdir(folder_path):
        file_path = os.path.join(folder_path, filename)
        if os.path.isfile(file_path):
            os.remove(file_path)
        elif os.path.isdir(file_path):
            clear_folder(file_path)
            os.rmdir(file_path)

clear_folder(new_folder_path)






class TestMainComponent(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.driver = webdriver.Chrome()
        cls.password = "2oLc8DX2!PpZ4"
        cls.email = "bruno.silva+test@ada.ac.uk"
        cls.driver.get("http://localhost:3030")
        time.sleep(2)

    @ordered
    def test_main_component_visible(self):
        email_input = self.driver.find_element("id","input_field_p_email_email")
        email_input.send_keys(self.email)
        continue_button = self.driver.find_element("id","id_register_email_button")
        continue_button.click()
        self.driver.implicitly_wait(1)
        password_input = self.driver.find_element("id","input_field_p_password_password")
        password_input.send_keys(self.password)
        continue_button = self.driver.find_element("xpath","//button[contains(., 'Continue')]")
        continue_button.click()
        time.sleep(3)
        main_component = self.driver.find_element("xpath","//div[@class='items-center justify-center h-screen align-middle w-screen-xl']")
        self.assertTrue(main_component.is_displayed())
        time.sleep(1)

        screenshot_path = os.path.join(new_folder_path, "screenshot_task_1.png")
        self.driver.save_screenshot(screenshot_path)

    
    
        

    @ordered
    def test_create_task_1(self):
        create_new_task_button = self.driver.find_element("xpath", "//button[contains(., 'Create New Task')]")
        create_new_task_button.click()
        time.sleep(1)

        task_title_input = self.driver.find_element("xpath", "//input[@placeholder='Task Title']")
        task_title_input.send_keys("Test Task 1")
        

        create_task_button = self.driver.find_element("xpath", "//button[contains(., 'Create Task')]")
        create_task_button.click()
        time.sleep(2)
        screenshot_path = os.path.join(new_folder_path, "screenshot_task_2.png")
        self.driver.save_screenshot(screenshot_path)


    @ordered
    def test_create_task_2(self):
        create_new_task_button = self.driver.find_element("xpath", "//button[contains(., 'Create New Task')]")
        create_new_task_button.click()
        time.sleep(1)

        task_title_input = self.driver.find_element("xpath", "//input[@placeholder='Task Title']")
        task_title_input.send_keys("Test Task 2")

        task_description_input = self.driver.find_element("xpath","//*[@id='root']/div/div[3]/div/div/div[1]/div[2]/div/div/textarea")
        task_description_input.send_keys("This is a test task description.")


        

        create_task_button = self.driver.find_element("xpath", "//button[contains(., 'Create Task')]")
        create_task_button.click()
        time.sleep(2)
        screenshot_path = os.path.join(new_folder_path, "screenshot_task_3.png")
        self.driver.save_screenshot(screenshot_path)

    @ordered
    def test_create_task_3(self):
        create_new_task_button = self.driver.find_element("xpath", "//button[contains(., 'Create New Task')]")
        create_new_task_button.click()
        time.sleep(1)

        task_title_input = self.driver.find_element("xpath", "//input[@placeholder='Task Title']")
        task_title_input.send_keys("Test Task 3")

        due_date_input = self.driver.find_element("xpath","//*[@id='root']/div/div[3]/div/div/input[2]")
        due_date_input.clear()
        due_date_input.send_keys("31-12-2023")
        

        create_task_button = self.driver.find_element("xpath", "//button[contains(., 'Create Task')]")
        create_task_button.click()
        time.sleep(2)
        screenshot_path = os.path.join(new_folder_path, "screenshot_task_4.png")
        self.driver.save_screenshot(screenshot_path)

    @ordered
    def test_create_task_4(self):
        create_new_task_button = self.driver.find_element("xpath", "//button[contains(., 'Create New Task')]")
        create_new_task_button.click()
        time.sleep(1)

        task_title_input = self.driver.find_element("xpath", "//input[@placeholder='Task Title']")
        task_title_input.send_keys("Test Task 4")
        
        priority_input = self.driver.find_element("xpath", "//input[@type='number']")
        priority_input.clear()
        priority_input.send_keys(3)
        
        create_task_button = self.driver.find_element("xpath", "//button[contains(., 'Create Task')]")
        create_task_button.click()
        time.sleep(2)
        screenshot_path = os.path.join(new_folder_path, "screenshot_task_5.png")
        self.driver.save_screenshot(screenshot_path)

    @ordered
    def test_create_task_5_normal(self):
        create_new_task_button = self.driver.find_element("xpath", "//button[contains(., 'Create New Task')]")
        create_new_task_button.click()
        time.sleep(1)

        task_title_input_1 = self.driver.find_element("xpath", "//input[@placeholder='Task Title']")
        task_title_input_1.send_keys("Test Task 5")

        task_tag_input_1 = self.driver.find_element("xpath", "//*[@id='root']/div/div[3]/div/div/div[3]/div/input")
        task_tag_input_1.send_keys("Test Task 5 tag")

        create_tag_button = self.driver.find_element("xpath", "//*[@id='root']/div/div[3]/div/div/div[3]/button")
        create_tag_button.click()

        task_tag_input_2 = self.driver.find_element("xpath", "//*[@id='root']/div/div[3]/div/div/div[3]/div/input")
        task_tag_input_2.send_keys("Test Task 5 tag color")

        screenshot_path = os.path.join(new_folder_path, "screenshot_task_6.png")
        self.driver.save_screenshot(screenshot_path)

        
        
    @ordered
    def test_create_task_5_color(self):


        
        action = ActionChains(self.driver)
        element = self.driver.find_element("xpath", "//*[@id='root']/div/div[3]/div/div/div[3]/input")
        element.click()

        for i in range(3):
            action.send_keys(Keys.TAB)
            for n in range(3):
                action.send_keys(100)
                action.send_keys(Keys.TAB)
            action.perform()
        

        create_tag_button_2 = self.driver.find_element("xpath", "//*[@id='root']/div/div[3]/div/div/div[3]/button")
        create_tag_button_2.click()

        time.sleep(1)
        

        create_task_button = self.driver.find_element("xpath", "//button[contains(., 'Create Task')]")
        create_task_button.click()
        time.sleep(2)

        screenshot_path = os.path.join(new_folder_path, "screenshot_task_7.png")
        self.driver.save_screenshot(screenshot_path)

    @ordered
    def test_cancel_task(self):
        # Click "Create New Task" button
        create_new_task_button = self.driver.find_element("xpath", "//button[contains(., 'Create New Task')]")
        create_new_task_button.click()
        time.sleep(1)

        task_title_input = self.driver.find_element("xpath", "//input[@placeholder='Task Title']")
        task_title_input.send_keys("Test Task 6")

        task_tag_input = self.driver.find_element("xpath", "//*[@id='root']/div/div[3]/div/div/div[3]/div/input")
        task_tag_input.send_keys("Test Task 6 tag")
        cancel_button = self.driver.find_element("xpath", "//button[contains(., 'Cancel')]")
        cancel_button.click()
        time.sleep(1)

        screenshot_path = os.path.join(new_folder_path, "screenshot_task_8.png")
        self.driver.save_screenshot(screenshot_path)

    @ordered
    def test_edit_task_1(self):
        edit_task_button = self.driver.find_element("xpath", "//*[@id='root']/div/div[2]/div/div[2]")
        edit_task_button.click()
        time.sleep(1)
    
        edit_button = self.driver.find_element("xpath", "//button[contains(., 'Edit')]")
        edit_button.click()
        time.sleep(1)

        task_title_input = self.driver.find_element("xpath", "//input[@placeholder='Test Task 1']")
        task_title_input.clear()
        task_title_input.send_keys("Test Task 1 - Edited")


        save_button = self.driver.find_element("xpath", "//button[contains(., 'Submit')]")
        save_button.click()
        time.sleep(1)

        screenshot_path = os.path.join(new_folder_path, "screenshot_task_9.png")
        self.driver.save_screenshot(screenshot_path)

    @ordered
    def test_edit_task_2(self):
        edit_task_button = self.driver.find_element("xpath", "//*[@id='root']/div/div[2]/div/div[2]")
        edit_task_button.click()
        time.sleep(1)

        task_description_edit = self.driver.find_element("xpath", "//button[contains(., 'Edit')]")
        task_description_edit.click()

        task_description_input = self.driver.find_element("xpath","//*[@id='root']/div/div[2]/div[1]/div[2]/div[3]/div/div[2]/div/div[2]/div/div/textarea")
        task_description_input.clear()
        task_description_input.send_keys("This is a test task description. Edited.")

        save_button = self.driver.find_element("xpath", "//button[contains(., 'Submit')]")
        save_button.click()
        time.sleep(1)

        screenshot_path = os.path.join(new_folder_path, "screenshot_task_10.png")
        self.driver.save_screenshot(screenshot_path)

    @ordered
    def test_edit_task_3(self):
        edit_task_button = self.driver.find_element("xpath", "//*[@id='root']/div/div[2]/div/div[2]")
        edit_task_button.click()
        time.sleep(1)

        due_date_input = self.driver.find_element("xpath","//*[@id='root']/div/div[2]/div[1]/div[2]/div[4]/div/div[1]/div[2]/input[1]")
        due_date_input.clear()
        due_date_input.send_keys("31-12-2023")

        save_button = self.driver.find_element("xpath", "//button[contains(., 'Submit')]")
        save_button.click()
        time.sleep(1)

        screenshot_path = os.path.join(new_folder_path, "screenshot_task_11.png")
        self.driver.save_screenshot(screenshot_path)
    
    @ordered
    def test_edit_task_4(self):
        edit_task_button = self.driver.find_element("xpath", "//*[@id='root']/div/div[2]/div/div[2]")
        edit_task_button.click()
        time.sleep(1)

        priority_input = self.driver.find_element("xpath", "//*[@id='root']/div/div[2]/div[1]/div[2]/div[4]/div/div[1]/div[2]/input[2]")
        priority_input.clear()
        priority_input.send_keys(3)

        save_button = self.driver.find_element("xpath", "//button[contains(., 'Submit')]")
        save_button.click()
        time.sleep(1)

        screenshot_path = os.path.join(new_folder_path, "screenshot_task_12.png")
        self.driver.save_screenshot(screenshot_path)

    @ordered
    def test_edit_task_5(self):
        edit_task_button = self.driver.find_element("xpath", "//*[@id='root']/div/div[2]/div[3]/div/div[2]")
        edit_task_button.click()
        time.sleep(1)

        task_tag_input = self.driver.find_element("xpath", "//*[@id='root']/div/div[2]/div[3]/div/div[3]/div/div[3]/div[1]/button")
        task_tag_input.click()
        time.sleep(1)

        save_button = self.driver.find_element("xpath", "//button[contains(., 'Submit')]")
        save_button.click()
        time.sleep(1)

        screenshot_path = os.path.join(new_folder_path, "screenshot_task_13.png")
        self.driver.save_screenshot(screenshot_path)

    @ordered
    def test_edit_task_6(self):
        edit_task_button = self.driver.find_element("xpath", "//*[@id='root']/div/div[2]/div[3]/div/div[2]")
        edit_task_button.click()
        time.sleep(1)

        task_tag_input_1 = self.driver.find_element("xpath", "//*[@id='root']/div/div[2]/div[3]/div/div[3]/div/div[4]/div/input")
        task_tag_input_1.send_keys("New on existing")

        create_tag_button = self.driver.find_element("xpath", "//*[@id='root']/div/div[2]/div[3]/div/div[3]/div/div[4]/button")
        create_tag_button.click()
        time.sleep(1)

        save_button = self.driver.find_element("xpath", "//button[contains(., 'Submit')]")
        save_button.click()
        time.sleep(1)

        screenshot_path = os.path.join(new_folder_path, "screenshot_task_14.png")
        self.driver.save_screenshot(screenshot_path)

    @ordered
    def test_edit_task_7(self):
        edit_task_button = self.driver.find_element("xpath", "//*[@id='root']/div/div[2]/div[3]/div/div[2]")
        edit_task_button.click()
        time.sleep(1)

        task_tag_input_1 = self.driver.find_element("xpath", "//*[@id='root']/div/div[2]/div[3]/div/div[3]/div/div[4]/div/input")
        task_tag_input_1.click()

        create_tag_button = self.driver.find_element("xpath", "//*[@id='root']/div/div[2]/div[3]/div/div[3]/div/div[4]/div/div/div/label[1]")
        create_tag_button.click()
        time.sleep(1)

        save_button = self.driver.find_element("xpath", "//button[contains(., 'Submit')]")
        save_button.click()
        time.sleep(1)

        screenshot_path = os.path.join(new_folder_path, "screenshot_task_15.png")
        self.driver.save_screenshot(screenshot_path)

    @ordered
    def test_edit_task_8(self):
        edit_task_button = self.driver.find_element("xpath", "//*[@id='root']/div/div[2]/div[3]/div/div[2]")
        edit_task_button.click()
        time.sleep(1)

        task_tag_input_1 = self.driver.find_element("xpath", "//*[@id='root']/div/div[2]/div[3]/div/div[3]/div/div[4]/div/input")
        task_tag_input_1.click()

        create_tag_button = self.driver.find_element("xpath", "//*[@id='root']/div/div[2]/div[3]/div/div[3]/div/div[4]/div/div/div/label[1]/button")
        create_tag_button.click()
        time.sleep(1)

        save_button = self.driver.find_element("xpath", "//button[contains(., 'Submit')]")
        save_button.click()
        time.sleep(1)

        screenshot_path = os.path.join(new_folder_path, "screenshot_task_16.png")
        self.driver.save_screenshot(screenshot_path)
    
    @ordered
    def test_filter_search(self):

        search_filter = self.driver.find_element("xpath", "//input[@placeholder='Search tasks...']")
        search_filter.send_keys("Test Task 1")

        search_filter.clear() 

        time.sleep(1)

        screenshot_path = os.path.join(new_folder_path, "screenshot_task_17.png")
        self.driver.save_screenshot(screenshot_path)

        

    @ordered
    def test_filter_date(self):
        time.sleep(1)


        date_filter = self.driver.find_element("xpath", "//*[@id='root']/div/div[1]/div[2]/div[1]/input")
        date_filter.clear()
        date_filter.send_keys("31-12-2023")

        time.sleep(1)

        date_filter.clear()

        time.sleep(1)

        screenshot_path = os.path.join(new_folder_path, "screenshot_task_18.png")
        self.driver.save_screenshot(screenshot_path)


    @ordered
    def test_filter_priority(self):
        time.sleep(1)


        priority_filter = self.driver.find_element("xpath", "//*[@id='root']/div/div[1]/div[2]/div[1]/div/button")
        priority_filter.click()
        time.sleep(0.5)

        priority_filter_number = self.driver.find_element("xpath", "//*[@id='root']/div/div[1]/div[2]/div[1]/div/select")
        priority_filter_number.click()
        time.sleep(0.5)

        priority_filter_number_3 = self.driver.find_element("xpath", "//*[@id='root']/div/div[1]/div[2]/div[1]/div/select/option[3]")
        priority_filter_number_3.click()

        time.sleep(0.5)

        time.sleep(1)
        screenshot_path = os.path.join(new_folder_path, "screenshot_task_19.png")
        self.driver.save_screenshot(screenshot_path)
        

    @ordered
    def test_filter_tags(self):
        time.sleep(1)

        tag_filter = self.driver.find_element("xpath", "//*[@id='root']/div/div[1]/div[2]/div[2]/button")
        tag_filter.click()

        tag_filter_1 = self.driver.find_element("xpath", "//*[@id='root']/div/div[1]/div[2]/div[2]/div/div[2]/div/input")
        tag_filter_1.click()
        time.sleep(1)

        time.sleep(1)
        screenshot_path = os.path.join(new_folder_path, "screenshot_task_20.png")
        self.driver.save_screenshot(screenshot_path)


    @ordered
    def test_multiple_filters_no_match(self):
        time.sleep(1)

        search_filter = self.driver.find_element("xpath", "//input[@placeholder='Search tasks...']")
        search_filter.send_keys("Test Task 1")
        time.sleep(1)

        date_filter = self.driver.find_element("xpath", "//*[@id='root']/div/div[1]/div[2]/div[1]/input")
        date_filter.clear()
        date_filter.send_keys("31-12-2023")
        time.sleep(1)
        screenshot_path = os.path.join(new_folder_path, "screenshot_task_21.png")
        self.driver.save_screenshot(screenshot_path)


    @ordered
    def test_multiple_filters_match(self):
        time.sleep(1)


        priority_filter_number_3 = self.driver.find_element("xpath", "//*[@id='root']/div/div[1]/div[2]/div[2]/div/div[2]/div[1]/input")
        priority_filter_number_3.click()

        tag_filter = self.driver.find_element("xpath", "//*[@id='root']/div/div[1]/div[2]/div[2]/button")
        tag_filter.click()

        time.sleep(1)
        screenshot_path = os.path.join(new_folder_path, "screenshot_task_22.png")
        self.driver.save_screenshot(screenshot_path)

    @ordered
    def test_done_task(self):
        time.sleep(1)



        for i in range(5):
            done_button = self.driver.find_element("xpath", '//*[@id="root"]/div/div[2]/div[1]/div[2]/div[1]/div[1]/input')
            done_button.click()
            time.sleep(0.2)
        time.sleep(1)
        screenshot_path = os.path.join(new_folder_path, "screenshot_task_23.png")
        self.driver.save_screenshot(screenshot_path)
    
    @ordered
    def test_archive_task(self):
        time.sleep(1)


        archive_button = self.driver.find_element("xpath", "//*[@id='root']/div/div[1]/div[3]/button")
        archive_button.click()

        time.sleep(1)
        screenshot_path = os.path.join(new_folder_path, "screenshot_task_24.png")
        self.driver.save_screenshot(screenshot_path)
    @ordered
    def test_delete_task(self):
        time.sleep(1)



        for i in range(5):
            delete_button = self.driver.find_element("xpath", "//button[contains(., 'Delete')]")
            delete_button.click()
            time.sleep(0.2)

        time.sleep(1)
        screenshot_path = os.path.join(new_folder_path, "screenshot_task_25.png")
        self.driver.save_screenshot(screenshot_path)
    

    @classmethod
    def tearDownClass(cls):
        cls.driver.quit()


if __name__ == "__main__":
    unittest.main()
