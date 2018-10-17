import json

from django.core.exceptions import ImproperlyConfigured

from .base import *


secret_file = os.path.join(BASE_DIR, 'secret.json')  # secrets.json 파일 위치를 명시

with open(secret_file) as f:
    secrets = json.loads(f.read())


def get_secret(setting, secrets=secrets):
    """비밀 변수를 가져오거나 명시적 예외를 반환한다."""
    try:
        return secrets[setting]
    except KeyError:
        error_msg = "Set the {} environment variable".format(setting)
        raise ImproperlyConfigured(error_msg)

SECRET_KEY = get_secret("SECRET_KEY")


DEBUG = True

INSTALLED_APPS += [
    'debug_toolbar',
]

MIDDLEWARE += ['debug_toolbar.middleware.DebugToolbarMiddleware', ]

# EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

# DEBUG_TOOLBAR_CONFIG = {
#     'JQUERY_URL': '',
# }


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        # django.db.backends.postgresql
        # django.db.backends.postgresql_psycopg2
        'NAME': 'postgres',
        'USER': 'postgres',
        'PASSWORD': 'dbwls930212',
        'HOST': 'localhost',
        'PORT': '5432',
    }
    # 'default': {
    #     'ENGINE': 'django.db.backends.sqlite3',
    #     'NAME': 'mydatabase',
    # }
}
# STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static')
]
