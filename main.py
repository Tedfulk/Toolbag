import asyncio
from tedfulk_kb_pycrawler import scrape_it, Config


config = Config(
    urls=[
        "https://jxnl.github.io/instructor/",
    ],
    output_file_name=["instructor"],
    output_file_type=["pdf"],
    max_pages_to_crawl=100,
)
asyncio.run(scrape_it(config))
