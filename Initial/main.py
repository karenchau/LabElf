import webapp2
import os
import jinja2
import logging

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

'''class CalculateHandler(webapp2.RequestHandler):
    def get(self):
        result =
        self.response.write(result)'''

class MainHandler(webapp2.RequestHandler):
    def get(self):
        template_initial = JINJA_ENVIRONMENT.get_template('templates/index.html')
        self.response.write(template_initial.render())

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    #('/calculate_input', CalculateHandler)
], debug=True)
