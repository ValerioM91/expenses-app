import { ButtonGroup, Pagination as ChakraPagination, IconButton } from '@chakra-ui/react'
import { useNavigate, useSearch } from '@tanstack/react-router'
import { useCallback } from 'react'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

export const Pagination = ({ totalPages }: { totalPages: number }) => {
  const page = useSearch({ from: '/' }).page ?? 1
  const navigate = useNavigate()

  const setPage = useCallback((page: number) => {
    navigate({ to: '/', search: { page } })
  }, [])

  return (
    <ChakraPagination.Root count={totalPages} pageSize={1} page={page}>
      <ButtonGroup
        variant="ghost"
        size="sm"
        wrap="wrap"
        justifyContent="center"
        mt={6}
        display="flex"
      >
        <ChakraPagination.PrevTrigger asChild>
          <IconButton
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            aria-label="Previous page"
          >
            <LuChevronLeft />
          </IconButton>
        </ChakraPagination.PrevTrigger>

        <ChakraPagination.Items
          render={(page) => (
            <IconButton
              onClick={() => setPage(page.value)}
              variant={{ base: 'outline', _selected: 'solid' }}
            >
              {page.value}
            </IconButton>
          )}
        />

        <ChakraPagination.NextTrigger asChild>
          <IconButton
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            aria-label="Next page"
          >
            <LuChevronRight />
          </IconButton>
        </ChakraPagination.NextTrigger>
      </ButtonGroup>
    </ChakraPagination.Root>
  )
}
