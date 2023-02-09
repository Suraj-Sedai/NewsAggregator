from django import forms

class ArticleSearchForm(forms.Form):
    query = forms.CharField(label='Search', max_length=100)
